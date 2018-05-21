# MIDI Manufacturer ID numbers

# Usage

    yarn add midi-manufacturers

In your code:

    import midi_name, * as midi_id from "midi-manufacturers";
    
    console.log(midi_id.FOCUSRITE_NOVATION);                // 00 20 29
    
    console.log(midi_name[midi_id.FOCUSRITE_NOVATION]);     // Focusrite/Novation

## Convert an ID to an array of bytes

    bytes = midi_id.FOCUSRITE_NOVATION.split(" ").map(n => parseInt(n,16));     // [0, 32, 41]    

# Source

https://www.midi.org/specifications/item/manufacturer-id-numbers
