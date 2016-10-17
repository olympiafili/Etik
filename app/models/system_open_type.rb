class SystemOpenType < ActiveRecord::Base
	belongs_to :open_types #Ανηκει σε αυτους του πινακες
  	belongs_to :systems
end
