class Constructor < ActiveRecord::Base
	has_many :material_constructors #Ετσι ειναι η συνταξη για να γραψω και το παρακάτω
	has_many :materials, :through => :material_constructors
end
