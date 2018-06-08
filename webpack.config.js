module.exports = {
    entry: './src/midi-manufacturers.js',
    output: {
        library: "MidiManufacturers",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};