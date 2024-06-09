import app from './app.js'
// import path from 'path';
import exportSwaggerEndpoints from './endpoints.js'
// import { createRequire } from "module";

// const require = createRequire(import.meta.url);

// const fas = require('./models/Category.js');

const PORT = process.env.PORT || 3000

const BAM = process.env.PASSWORD

console.log('123456')
console.log(BAM)

export const server = () => {
    app.listen(PORT, () => {
        console.log(`API documentation: http://localhost:${PORT}/docs`)
        console.log(`Server is running on port ${PORT}`)
    })

    // swagger endpoints
    exportSwaggerEndpoints(app)
}

server()

// export default server
