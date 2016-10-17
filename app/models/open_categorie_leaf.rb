class OpenCategorieLeaf < ActiveRecord::Base
	belongs_to :leafs #Ανηκει σε αυτους του πινακες
  	belongs_to :open_categories
end
