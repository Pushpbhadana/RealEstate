// import { NextRequest, NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(request: NextRequest) {
//   try {
//     const { name, email, mobile, message } = await request.json();

//     // Create transporter
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASSWORD,
//       },
//     });

//     // Email content
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER,
//       subject: `New Contact Form Submission from ${name}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//           <h2 style="color: #333; border-bottom: 2px solid #007acc; padding-bottom: 10px;">
//             New Contact Form Submission
//           </h2>
          
//           <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
//             <table style="width: 100%;">
//               <tr>
//                 <td style="padding: 8px 0; font-weight: bold; width: 100px;">Name:</td>
//                 <td style="padding: 8px 0;">${name}</td>
//               </tr>
//               <tr>
//                 <td style="padding: 8px 0; font-weight: bold;">Email:</td>
//                 <td style="padding: 8px 0;">${email}</td>
//               </tr>
//               <tr>
//                 <td style="padding: 8px 0; font-weight: bold;">Mobile:</td>
//                 <td style="padding: 8px 0;">${mobile || 'Not provided'}</td>
//               </tr>
//               <tr>
//                 <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Message:</td>
//                 <td style="padding: 8px 0;">${message}</td>
//               </tr>
//             </table>
//           </div>
          
//           <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666;">
//             <p>This message was sent from your website contact form.</p>
//             <p>Timestamp: ${new Date().toLocaleString()}</p>
//           </div>
//         </div>
//       `,
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);

//     return NextResponse.json(
//       { message: 'Email sent successfully' },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error('Error sending email:', error);
//     return NextResponse.json(
//       { error: 'Failed to send email' },
//       { status: 500 }
//     );
//   }
// }