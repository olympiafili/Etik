class OrdersController < ApplicationController
  before_action :set_order, only: [:show, :edit, :update, :destroy, :destroy_files]
  
  layout "app"
  
  skip_before_filter :verify_authenticity_token, :only => [:update]

  respond_to :html

  def index
    @orders = Order.all
    respond_with(@orders)
  end

  def show
    respond_with(@order)
  end

  def new
    @order = Order.new
    respond_with(@order)
  end

  def edit
    @order = Order.find(params[:id])
  end

  def create
    @order = Order.new(order_params)
    @order.save
    respond_with(@order)
  end

  def update
    @order.update(order_params)
    #respond_with(@order)
    redirect_to(:back)
  end

  def destroy
    @order.destroy
    respond_with(@order)
  end

  def download_files
    require 'zip'

    filename = 'Position_'+params[:id]+".zip"
    temp_file = Tempfile.new(filename)
    input_filenames = []

    entries = Dir.entries("#{Rails.root}/public/uploads/order/avatar/"+params[:id]+"")
    folder = "#{Rails.root}/public/uploads/order/avatar/"+params[:id]+""

    entries.each.with_index(0) do |value, index|
      if ( index >= 2 && "#{value}" != ".DS_Store" )
        puts "#{index}: #{value}"
        input_filenames << "#{value}"
      end
    end
     
    Zip::File.open(temp_file.path, Zip::File::CREATE) do |zip_file|
        input_filenames.each do |filename|
          zip_file.add(filename, folder + '/' + filename)
        end
    end
    zip_data = File.read(temp_file.path)
    send_data(zip_data, :type => 'application/zip', :filename => filename)
    #redirect_to etic_user_diax_path
  end

  def destroy_files
    require 'fileutils'

    @order.remove_avatar!
    @order.save
    FileUtils.rm_rf(Dir.glob("#{Rails.root}/public/uploads/order/avatar/"+params[:id]+""+"/*"+""))
    redirect_to(:back)
  end

  private
    def set_order
      @order = Order.find(params[:id])
    end

    def order_params
      params.require(:order).permit(:avatar => [])
      #params[:order]
    end
end
