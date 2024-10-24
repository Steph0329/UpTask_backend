import { transporter } from "../config/nodemailer"

interface IEmail {
    email: string
    name: string
    token: string
}

export class AuthEmail {
    static sendConfirmationEmai = async (user : IEmail) => {
        const info = await transporter.sendMail({
            from: 'UpTask <roy.guevara2903@gmail.com>',
            to: user.email,
            subject: 'UpTask - Confirma tu cuenta',
            text: 'UpTask - Confirma tu cuenta',
            html: `<p>Hola: ${user.name}, has creado tu cuenta en UpTask, ya casi está todo listo, solo debes confirmar tu cuenta</p>
            
                <p>Visita el siguiente enlace:</p>
                <a href="${process.env.FRONTEND_URL}/auth/confirm-account">Confirmar cuenta</a>
                <p>Ingresa el código: <b>${user.token}</b></p>
                <p>Este token expira en 10 minutos</p>
            `
        })

       console.log('Mensaje enviado', info.messageId)
    }

    static sendPasswordResetToken = async (user : IEmail) => {
        const info = await transporter.sendMail({
            from: 'UpTask <roy.guevara2903@gmail.com>',
            to: user.email,
            subject: 'UpTask - Reestablece tu contraseña',
            text: 'UpTask - Confirma tu cuenta',
            html: `<p>Hola: ${user.name}, has solicitado reestabler tu contraseña.</p>
            
                <p>Visita el siguiente enlace:</p>
                <a href="${process.env.FRONTEND_URL}/auth/new-password">Reestablecer contraseña</a>
                <p>Ingresa el código: <b>${user.token}</b></p>
                <p>Este token expira en 10 minutos</p>
            `
        })

       console.log('Mensaje enviado', info.messageId)
    }
}