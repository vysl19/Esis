using Data.Enity;
using Data.Repository;
using NLog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Text;
using System.Web.Http;

namespace Esis.Controllers
{
    public class NotificationController : BaseController
    {
        private static Logger logger = LogManager.GetCurrentClassLogger();
        [HttpPost]
        public bool SendMail(Notification notification)
        {
            var mailRepository = new MailRepository();
            var mailRequestRepository = new MailRequestRepository();
            notification.Ip = GetIp();
            if (mailRequestRepository.List(notification.Ip).Count > 0)
            {
                throw new Exception(string.Format("Bugun daha önce mail gönderilmiştir İp=>{0}, Email =>{1}", notification.Ip, notification.Email));
            }
            var mailInfo = mailRepository.List();
            var ePosta = new MailMessage()
            {
                From = new MailAddress(mailInfo[0].Email),
                Subject = "İletişim",
            };
            var sb = new StringBuilder();
            sb.AppendLine("İsim:" + notification.NameSurname);
            sb.AppendLine("Mail:" + notification.Email);
            sb.AppendLine("Telefon:" + notification.PhoneNumber);
            sb.AppendLine("Açıklama:" + notification.Message);
            ePosta.Body = sb.ToString();

            ePosta.To.Add(mailInfo[0].Email);

            var smtp = new SmtpClient();
            smtp.Credentials = new System.Net.NetworkCredential(mailInfo[0].Email, mailInfo[0].Password);
            smtp.Port = mailInfo[0].Port;
            smtp.Host = mailInfo[0].Host;
            smtp.EnableSsl = true;
            try
            {
                smtp.Send(ePosta);
                notification.Message = sb.ToString();
                new MailRequestRepository().Insert(notification);
            }
            catch (SmtpException e)
            {
                logger.Error(string.Format("Hata=>{0} StackTrace=>{1}", e.Message, e.StackTrace));
            }
            return true;
        }
    }
}
