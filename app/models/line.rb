class Line < ActiveRecord::Base
	has_many :system_lines #Ετσι ειναι η συνταξη για να γραψω και το παρακάτω
	has_many :systems, :through => :system_lines
end
