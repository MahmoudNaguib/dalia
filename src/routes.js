module.exports = function (app) {
    /////////// API
    app.use('/api/auth', require('./Routes/Api/ApiAuthRoutes'));
    app.use('/api/profile', require('./Routes/Api/ApiProfileRoutes'));
    app.use('/api/contacts', require('./Routes/Api/ApiContactsRoutes'));
    app.use('/api/certificates', require('./Routes/Api/ApiCertificatesRoutes'));
    app.use('/api/experiences', require('./Routes/Api/ApiExperiencesRoutes'));
    app.use('/api/skills', require('./Routes/Api/ApiSkillsRoutes'));
    ////////////

}

