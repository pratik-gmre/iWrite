Cannot set headers after they are sent to the client //this error means you have not written return before res.status().json()
instead of https write http in postman