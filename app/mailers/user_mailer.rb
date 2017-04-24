class UserMailer < ActionMailer::Base
  default :from => "olympia.filippa@gmail.com" # if from is not specified it will be set as from.
  
  def welcome_email(user_info)
    email = "olympia.filippa@gmail.com"#user_info[:mail]
    @username = user_info[:username]
    @userepitheto = user_info[:epitheto]
    @aiteria = user_info[:aiteria]
    @email_user = user_info[:email_user] 
    @number = user_info[:number]
    #@date = user_info[:date]
    #@people = user_info[:people]
    @message = user_info[:message]
    #@url  = new_user_session_url
    mail(:to => email, :subject => "Customer message!!")
  end

  def csv_email(csv)
    attachments['order.csv'] = {mime_type: 'text/csv', content: csv}
    mail(:to => "angebote@fenstra.de", :subject => "Order csv")
  end
end
