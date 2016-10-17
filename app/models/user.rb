class User < ActiveRecord::Base

  belongs_to :paraggelia

  acts_as_translator
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :confirmable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  #validates_length_of :phone, :minimum => 10, :maximum => 10

  def can_admin_translations?
  	self.email == 'info@balteco.pro'
  end

end
