Rails.application.configure do

  config.assets.compress = true
  uglifier = Uglifier.new output: { comments: :none }
  config.assets.js_compressor = uglifier
  config.middleware.use Rack::Deflater
  config.middleware.insert_before ActionDispatch::Static, Rack::Deflater

  config.middleware.use HtmlCompressor::Rack,
    compress_css: true,
    compress_javascript: true,
    css_compressor: Sass,
    enabled: true,
    javascript_compressor: uglifier,
    preserve_line_breaks: false,
    remove_comments: true,
    remove_form_attributes: false,
    remove_http_protocol: false,
    remove_https_protocol: false,
    remove_input_attributes: true,
    remove_intertag_spaces: false,
    remove_javascript_protocol: true,
    remove_link_attributes: true,
    remove_multi_spaces: true,
    remove_quotes: true,
    remove_script_attributes: true,
    remove_style_attributes: true,
    simple_boolean_attributes: true,
    simple_doctype: false
  # Settings specified here will take precedence over those in config/application.rb.

  # Code is not reloaded between requests.
  config.cache_classes = true

  # Eager load code on boot. This eager loads most of Rails and
  # your application in memory, allowing both threaded web servers
  # and those relying on copy on write to perform better.
  # Rake tasks automatically ignore this option for performance.
  config.eager_load = true

  # Full error reports are disabled and caching is turned on.
  config.consider_all_requests_local       = false
  config.action_controller.perform_caching = true

  # Enable Rack::Cache to put a simple HTTP cache in front of your application
  # Add `rack-cache` to your Gemfile before enabling this.
  # For large-scale production use, consider using a caching reverse proxy like nginx, varnish or squid.
  # config.action_dispatch.rack_cache = true

  # Disable Rails's static asset server (Apache or nginx will already do this).
  config.serve_static_assets = true ##FALSEEEEE

  # Compress JavaScripts and CSS.
  #config.assets.js_compressor = :uglifier
  #config.assets.css_compressor = :yui
  #config.assets.js_compressor = :yui
  # config.assets.css_compressor = :sass
  #config.assets.css_compressor = :yui

  # Do not fallback to assets pipeline if a precompiled asset is missed.
  config.assets.compile = false #kanonika false

  # Generate digests for assets URLs.
  config.assets.digest = true

  # `config.assets.precompile` and `config.assets.version` have moved to config/initializers/assets.rb

  # Specifies the header that your server uses for sending files.
  # config.action_dispatch.x_sendfile_header = "X-Sendfile" # for apache
  # config.action_dispatch.x_sendfile_header = 'X-Accel-Redirect' # for nginx

  # Force all access to the app over SSL, use Strict-Transport-Security, and use secure cookies.
  # config.force_ssl = true

  # Set to :debug to see everything in the log.
  config.log_level = :debug

  # Prepend all log lines with the following tags.
  # config.log_tags = [ :subdomain, :uuid ]

  # Use a different logger for distributed setups.
  # config.logger = ActiveSupport::TaggedLogging.new(SyslogLogger.new)

  # Use a different cache store in production.
  # config.cache_store = :mem_cache_store

  # Enable serving of images, stylesheets, and JavaScripts from an asset server.
  # config.action_controller.asset_host = "http://assets.example.com"

  # Ignore bad email addresses and do not raise email delivery errors.
  # Set this to true and configure the email server for immediate delivery to raise delivery errors.
  # config.action_mailer.raise_delivery_errors = false

  # Enable locale fallbacks for I18n (makes lookups for any locale fall back to
  # the I18n.default_locale when a translation cannot be found).
  config.i18n.fallbacks = false #true kanonika

  # rails will fallback to en, no matter what is set as config.i18n.default_locale
  config.i18n.fallbacks = [:en]

  # Send deprecation notices to registered listeners.
  config.active_support.deprecation = :notify

  # Disable automatic flushing of the log to improve performance.
  # config.autoflush_log = false

  # Use default logging formatter so that PID and timestamp are not suppressed.
  config.log_formatter = ::Logger::Formatter.new

  # Do not dump schema after migrations.
  config.active_record.dump_schema_after_migration = false


  config.action_mailer.asset_host = "http://46.101.236.245:8860"
  config.action_mailer.default_url_options = { :host => '46.101.236.245:8860' }
  config.action_mailer.delivery_method = :smtp

  #config.action_mailer.default_url_options = { 
    #host: "46.101.236.245:8850"

   #}

     ActionMailer::Base.smtp_settings = {
  :address => "smtp.gmail.com",
  :port => 587,
  :user_name => "balteco2017@gmail.com",
  :password => "baltecoltd2016"
  }

  #config.action_mailer.smtp_settings = {
    #address: "smtp.gmail.com",
    #port: 587,
    #domain: "example.com",
    #authentication: "plain",
    #enable_starttls_auto: true,
    #user_name: "olympia.filippa@gmail.com", # this should be a real gmail id
    #password: "" # this should be real password of your gmail id
  #}

end
