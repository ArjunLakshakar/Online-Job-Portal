package com.jobportal.utility;

public class Data {

    public static String getMessageBody(String otp, String name){
        String htmlContent = "<!DOCTYPE html>\n" +
                "<html>\n" +
                "<head>\n" +
                "    <style>\n" +
                "        body {\n" +
                "            font-family: Arial, sans-serif;\n" +
                "            background-color: #f4f4f4;\n" +
                "            margin: 0;\n" +
                "            padding: 0;\n" +
                "        }\n" +
                "        .email-container {\n" +
                "            max-width: 600px;\n" +
                "            margin: 20px auto;\n" +
                "            background-color: #ffffff;\n" +
                "            border: 1px solid #ddd;\n" +
                "            border-radius: 8px;\n" +
                "            padding: 20px;\n" +
                "            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n" +
                "        }\n" +
                "        .header {\n" +
                "            text-align: center;\n" +
                "            padding: 20px 0;\n" +
                "            background-color: #007bff;\n" +
                "            color: #ffffff;\n" +
                "            font-size: 24px;\n" +
                "            font-weight: bold;\n" +
                "            border-radius: 8px 8px 0 0;\n" +
                "        }\n" +
                "        .content {\n" +
                "            padding: 20px;\n" +
                "            text-align: center;\n" +
                "            color: #333333;\n" +
                "        }\n" +
                "        .otp {\n" +
                "            font-size: 36px;\n" +
                "            font-weight: bold;\n" +
                "            color: #007bff;\n" +
                "            margin: 20px 0;\n" +
                "        }\n" +
                "        .footer {\n" +
                "            text-align: center;\n" +
                "            padding: 10px;\n" +
                "            font-size: 12px;\n" +
                "            color: #666666;\n" +
                "            border-top: 1px solid #ddd;\n" +
                "        }\n" +
                "        a {\n" +
                "            color: #007bff;\n" +
                "            text-decoration: none;\n" +
                "        }\n" +
                "    </style>\n" +
                "</head>\n" +
                "<body>\n" +
                "    <div class=\"email-container\">\n" +
                "        <div class=\"header\">\n" +
                "            Your OTP Code\n" +
                "        </div>\n" +
                "        <div class=\"content\">\n" +
                "            <p>Hello " + name + ",</p>\n" +
                "            <p>Use the OTP below to complete your verification process. This OTP is valid for the next 10 minutes.</p>\n" +
                "            <div class=\"otp\">" + otp + "</div>\n" +
                "            <p>If you didn't request this, please ignore this email or contact support.</p>\n" +
                "        </div>\n" +
                "        <div class=\"footer\">\n" +
                "            <p>&copy; 2025 MyJob" +
                ". All Rights Reserved.</p>\n" +
                "            <p>Need help? <a href=\"mailto:support@yourcompany.com\">Contact Support</a></p>\n" +
                "        </div>\n" +
                "    </div>\n" +
                "</body>\n" +
                "</html>";


        return htmlContent;

    }
}
