
class PUBLIC_DATA {
    static port = process.env.PORT || 4000
    static mongo_uri = process.env.MONGO_URI || `mongodb://localhost:inventory`
    static jwt_auth = process.env.JWT_AUTH || "Sachin@1234"
    

}
module.exports = {
    PUBLIC_DATA
}