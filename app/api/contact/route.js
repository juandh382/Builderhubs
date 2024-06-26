import { NextResponse, NextRequest } from 'next/server'
const nodemailer = require('nodemailer');

// Handles POST requests to /api

export async function POST(request) {
    const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
    const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
    const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

    const formData = await request.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    const phone = formData.get('phone')

    const transporter = nodemailer.createTransport({
        host: "live.smtp.mailtrap.io",
        port: 587,
        auth: {
            user: username,
            pass: password
        }
    });

    try {

        const mail = await transporter.sendMail({
            from: 'info@getbuilderhubs.com',
            to: myEmail,
            replyTo: email,
            subject: `A new user has  signed up for BuilderHub ${email}`,
            html: `
            <h2>Following are the details:</h2>
            <ul>
                <li>Name: ${name} </li>
                <li>Email: ${email} </li>
                <li>Phone: ${phone} </li>
            </ul>
            `,
        })

        return NextResponse.json({ message: "Success: email was sent" })

    } catch (error) {
        console.log(error)
        NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
    }

}