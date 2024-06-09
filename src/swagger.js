import swaggerAutogen from 'swagger-autogen'
import { server } from './server.js'

const doc = {
    info: {
        version: '1.0.0',
        title: 'my-store',
        description: 'Swagger documentation for my-store...',
    },
    servers: [
        {
            url: 'http://localhost:8000',
        },
    ],
    components: {
        schemas: {
            someBody: {
                $name: 'Jhon Doe',
                $age: 29,
                about: '',
            },
            someResponse: {
                name: 'Jhon Doe',
                age: 29,
                diplomas: [
                    {
                        school: 'XYZ University',
                        year: 2020,
                        completed: true,
                        internship: {
                            hours: 290,
                            location: 'XYZ Company',
                        },
                    },
                ],
            },
            someEnum: {
                '@enum': ['red', 'yellow', 'green'],
            },
        },
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
            },
        },
    },
}

const outputFile = './swagger-output.json'
const endpointsFiles = ['./endpoints.js']

swaggerAutogen()(outputFile, endpointsFiles, doc).then(() => {
    server()
})
