const Codes = {};

Codes.code200 = (res) => {
    return res.status(200).json({ message: 'Everything ok' });
}

Codes.code201 = (res) => {
    return res.status(200).json({ message: 'Created successfully' });
}

Codes.code404 = (res) => {
    return res.status(404).json({ message: 'No coincidences' });
}

Codes.code409 = (res) => {
    return res.status(409).json({ message: 'Conflicts' });
}

Codes.code500 = (res) => {
    return res.status(500).json({ message: 'Internal Server Error' });
}

module.exports = Codes;