class SystemLine < ActiveRecord::Base
	belongs_to :lines #Ανηκει σε αυτους του πινακες
  	belongs_to :systems
end
