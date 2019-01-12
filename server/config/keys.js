module.exports = {
	google: {
		clientID: process.env.clientID,
		clientSecret: process.env.clientSecret
	},
	cookies: {
		secret: process.env.secret
	},
	s3Bucket:{
		secretAccessKey: process.env.secretAccessKey,
		accessKeyId: process.env.accessKeyId
	}
};