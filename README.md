# MIDI Manufacturer ID numbers

# Usage

    yarn add midi-manufacturers

In your code:

    import midi_name, * as midi_id from "midi-manufacturer-id";
    
    console.log(midi_id.FOCUSRITE_NOVATION);                // 00 20 29
    
    console.log(midi_name[midi_id.FOCUSRITE_NOVATION]);     // Focusrite/Novation

# Source

https://www.midi.org/specifications/item/manufacturer-id-numbers
