import { json } from '@sveltejs/kit';
import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';

// Initialize Resend with your API key
const resend = new Resend(RESEND_API_KEY);

export async function POST({ request }) {
	try {
		const { name, email, company, phone, message, interest } = await request.json();
		
		// Validate required fields
		if (!name || !email || !company || !message) {
			return json(
				{ error: 'Missing required fields' },
				{ status: 400 }
			);
		}
		
		// Send email using Resend
		const { data, error } = await resend.emails.send({
			from: 'VStorage Contact <contact@vstorage.ch>',
			to: ['contact@vstorage.ch'],
			replyTo: email, // This ensures replies go back to the user
			subject: `New Enterprise Inquiry from ${name} at ${company}`,
			html: `
				<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
					<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 16px; margin-bottom: 20px;">
						<h1 style="color: white; margin: 0; font-size: 24px; font-weight: 600;">New Enterprise Inquiry</h1>
					</div>
					
					<div style="background: #f8f9fa; padding: 30px; border-radius: 16px; border: 1px solid #e9ecef;">
						<h2 style="color: #333; margin-top: 0; font-size: 20px; font-weight: 600;">Contact Details</h2>
						
						<div style="margin-bottom: 20px;">
							<strong style="color: #555;">Name:</strong>
							<span style="color: #333; margin-left: 8px;">${name}</span>
						</div>
						
						<div style="margin-bottom: 20px;">
							<strong style="color: #555;">Email:</strong>
							<span style="color: #333; margin-left: 8px;">${email}</span>
						</div>
						
						<div style="margin-bottom: 20px;">
							<strong style="color: #555;">Company:</strong>
							<span style="color: #333; margin-left: 8px;">${company}</span>
						</div>
						
						${phone ? `
						<div style="margin-bottom: 20px;">
							<strong style="color: #555;">Phone:</strong>
							<span style="color: #333; margin-left: 8px;">${phone}</span>
						</div>
						` : ''}
						
						${interest ? `
						<div style="margin-bottom: 20px;">
							<strong style="color: #555;">Area of Interest:</strong>
							<span style="color: #333; margin-left: 8px;">${interest}</span>
						</div>
						` : ''}
						
						<div style="margin-bottom: 20px;">
							<strong style="color: #555;">Message:</strong>
							<div style="color: #333; margin-top: 8px; padding: 15px; background: white; border-radius: 8px; border: 1px solid #e9ecef; line-height: 1.6;">
								${message.replace(/\n/g, '<br>')}
							</div>
						</div>
					</div>
					
					<div style="text-align: center; margin-top: 30px; padding: 20px; background: #f8f9fa; border-radius: 16px;">
						<p style="color: #666; margin: 0; font-size: 14px;">
							This inquiry was submitted through the VStorage enterprise contact form.
						</p>
					</div>
				</div>
			`
		});
		
		if (error) {
			console.error('Resend error:', error);
			return json(
				{ error: 'Failed to send email' },
				{ status: 500 }
			);
		}
		
		// Send confirmation email to the user
		console.log('Sending confirmation email to:', email);
		await resend.emails.send({
			from: 'VStorage Enterprise <contact@vstorage.ch>',
			to: [email],
			subject: 'Thank you for your inquiry - VStorage Enterprise',
			html: `
				<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
					<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 16px; margin-bottom: 20px; text-align: center;">
						<h1 style="color: white; margin: 0; font-size: 24px; font-weight: 600;">Thank You!</h1>
						<p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">We've received your enterprise inquiry</p>
					</div>
					
					<div style="background: #f8f9fa; padding: 30px; border-radius: 16px; border: 1px solid #e9ecef;">
						<p style="color: #333; margin: 0 0 20px 0; line-height: 1.6;">
							Hi ${name},
						</p>
						
						<p style="color: #333; margin: 0 0 20px 0; line-height: 1.6;">
							Thank you for reaching out to VStorage Enterprise. We've received your inquiry and our team will review it carefully.
						</p>
						
						<p style="color: #333; margin: 0 0 20px 0; line-height: 1.6;">
							<strong>What happens next?</strong>
						</p>
						
						<ul style="color: #333; margin: 0 0 20px 0; padding-left: 20px; line-height: 1.6;">
							<li>Our enterprise team will review your requirements</li>
							<li>We'll contact you within 24 hours</li>
							<li>We'll schedule a personalized demo if needed</li>
							<li>We'll provide a custom solution proposal</li>
						</ul>
						
						<p style="color: #333; margin: 0 0 20px 0; line-height: 1.6;">
							If you have any urgent questions, please don't hesitate to contact us at <strong>contact@vstorage.ch</strong>.
						</p>
						
						<p style="color: #333; margin: 0; line-height: 1.6;">
							Best regards,<br>
							<strong>The VStorage Enterprise Team</strong>
						</p>
					</div>
					
					<div style="text-align: center; margin-top: 30px; padding: 20px; background: #f8f9fa; border-radius: 16px;">
						<p style="color: #666; margin: 0; font-size: 14px;">
							VStorage Enterprise - Secure Cloud Storage & Sharing
						</p>
					</div>
				</div>
			`
		});
		
		return json({ success: true, messageId: data.id });
		
	} catch (error) {
		console.error('Contact form error:', error);
		return json(
			{ error: 'Internal server error' },
			{ status: 500 }
		);
	}
}
