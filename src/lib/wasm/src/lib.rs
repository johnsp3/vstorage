use wasm_bindgen::prelude::*;
use web_sys::console;

// Import the `console.log` function from the `console` module
macro_rules! log {
    ( $( $t:tt )* ) => {
        console::log_1(&format!( $( $t )* ).into());
    }
}

#[wasm_bindgen]
pub struct VStorage {
    data: Vec<u8>,
    capacity: usize,
}

#[wasm_bindgen]
impl VStorage {
    #[wasm_bindgen(constructor)]
    pub fn new(capacity: usize) -> VStorage {
        log!("Initializing VStorage with capacity: {}", capacity);
        VStorage {
            data: vec![0; capacity],
            capacity,
        }
    }

    #[wasm_bindgen]
    pub fn write(&mut self, offset: usize, data: &[u8]) -> Result<(), JsValue> {
        if offset + data.len() > self.capacity {
            return Err(JsValue::from_str("Write would exceed capacity"));
        }
        
        for (i, &byte) in data.iter().enumerate() {
            self.data[offset + i] = byte;
        }
        
        log!("Written {} bytes at offset {}", data.len(), offset);
        Ok(())
    }

    #[wasm_bindgen]
    pub fn read(&self, offset: usize, length: usize) -> Result<Vec<u8>, JsValue> {
        if offset + length > self.capacity {
            return Err(JsValue::from_str("Read would exceed capacity"));
        }
        
        let result = self.data[offset..offset + length].to_vec();
        log!("Read {} bytes from offset {}", length, offset);
        Ok(result)
    }

    #[wasm_bindgen]
    pub fn get_capacity(&self) -> usize {
        self.capacity
    }

    #[wasm_bindgen]
    pub fn get_used(&self) -> usize {
        self.data.iter().filter(|&&x| x != 0).count()
    }

    #[wasm_bindgen]
    pub fn clear(&mut self) {
        self.data.fill(0);
        log!("Storage cleared");
    }

    #[wasm_bindgen]
    pub fn optimize(&mut self) -> usize {
        // Simulate storage optimization
        let used = self.get_used();
        let freed = self.capacity - used;
        
        // Compact the data
        let mut compacted = Vec::with_capacity(used);
        for &byte in &self.data {
            if byte != 0 {
                compacted.push(byte);
            }
        }
        
        self.data = compacted;
        self.data.resize(self.capacity, 0);
        
        log!("Storage optimized, freed {} bytes", freed);
        freed
    }
}

// Export a function to initialize the WASM module
#[wasm_bindgen(start)]
pub fn main() {
    log!("VStorage WASM module loaded successfully");
}
