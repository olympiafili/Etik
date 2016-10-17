class Leaf < ActiveRecord::Base
	has_many :open_categorie_leafs #Ετσι ειναι η συνταξη για να γραψω και το παρακάτω
	has_many :open_categories, :through => :open_categorie_leafs
end
