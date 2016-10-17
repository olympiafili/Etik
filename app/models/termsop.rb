class Termsop < ActiveRecord::Base
	validates :text, uniqueness: true
end
