class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  #around_action :collect_metrics

  before_action :configure_permitted_parameters, if: :devise_controller?

  before_filter :set_cache_buster, :set_locale
  ##Για back μετα απο log in
  after_filter :store_location

  def set_locale
    I18n.locale = session[:locale] || I18n.default_locale
    session[:locale] = I18n.locale
  end

  def collect_metrics
    #start = Time.now
    #yield
    #duration = Time.now - start
    #Rails.logger.info "#{controller_name}##{action_name}: #{duration}s"
  end
    ## Για back μετα απο login
	def store_location
	  # store last url - this is needed for post-login redirect to whatever the user last visited.
    session[:previous_url2] = request.fullpath unless request.fullpath =~ /\/users/

	  return unless request.get? 
	  if (request.path != "/users/sign_in" &&
	      request.path != "/users/sign_up" &&
	      request.path != "/users/password/new" &&
	      request.path != "/users/password/edit" &&
	      request.path != "/users/confirmation" &&
	      request.path != "/users/sign_out" &&
	      !request.xhr?) # don't store ajax calls
	    session[:previous_url] = request.fullpath 
	  end
	end

	def after_sign_in_path_for(resource)
	    #session[:previous_url] || root_path
	    if (current_user.admin == 1)
			#return etic_etic_card_path
			return data_base_in_out_main_controll_panel_path
		else 
	        #return etic_home_path
	        request.env['omniauth.origin'] || stored_location_for(resource) || etic_user_diax_path
	    end
	end

	def after_sign_out_path_for(resource_or_scope)
        new_user_session_path
    end

    def set_cache_buster
    response.headers["Cache-Control"] = "no-cache, no-store, max-age=0, must-revalidate"
    response.headers["Pragma"] = "no-cache"
    response.headers["Expires"] = "Fri, 01 Jan 1990 00:00:00 GMT"
  end


	protected

    def configure_permitted_parameters
    	devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:name, :epitheto, :company, :phone, :region, :email, :password, :address1, :address2) }
    	devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:name, :epitheto, :company, :phone, :address1, :address2, :region, :email, :password, :current_password) }
        #devise_parameter_sanitizer.for(:sign_up) << :username
    end



end
