class ParaggeliaController < ApplicationController
  before_action :set_paraggelia, only: [:show, :edit, :update, :destroy, :destroy_files]
  
	layout "app"

  skip_before_filter :verify_authenticity_token, :only => [:update]

  respond_to :html

  def index
    @paraggelia = Paraggelia.all
    respond_with(@paraggelia)
  end

  def show
    respond_with(@paraggelia)
  end

  def new
    @paraggelia = Paraggelia.new
    respond_with(@paraggelia)
  end

  def edit
    @paraggelia = Paraggelia.find(params[:id])
    @orders = Order.where(:paraggelia_id => @paraggelia.id)
  end

  def create
    @paraggelia = Paraggelia.new(paraggelia_params)
    @paraggelia.save
    respond_with(@paraggelia)
  end

  def update
    @paraggelia.update(paraggelia_params)
    #respond_with(@paraggelia)
    redirect_to etic_user_diax_path
  end

  def destroy
    @paraggelia.destroy
    respond_with(@paraggelia)
  end

  def download_files
    require 'zip'

    filename = 'Offer_'+params[:id]+".zip"
    temp_file = Tempfile.new(filename)
    input_filenames = []

    entries = Dir.entries("#{Rails.root}/public/uploads/paraggelia/avatar/"+params[:id]+"")
    folder = "#{Rails.root}/public/uploads/paraggelia/avatar/"+params[:id]+""

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

    @paraggelia.remove_avatar!
    @paraggelia.save
    FileUtils.rm_rf(Dir.glob("#{Rails.root}/public/uploads/paraggelia/avatar/"+params[:id]+""+"/*"+""))
    redirect_to etic_user_diax_path
  end

  private
    def set_paraggelia
      @paraggelia = Paraggelia.find(params[:id])
    end

    def paraggelia_params
      params.require(:paraggelia).permit(:avatar => [])
      #params[:paraggelia]
    end
end
