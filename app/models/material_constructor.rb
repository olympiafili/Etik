class MaterialConstructor < ActiveRecord::Base
	belongs_to :constructor #Ανηκει σε αυτους του πινακες
  	belongs_to :material
end
