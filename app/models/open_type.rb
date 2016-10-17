class OpenType < ActiveRecord::Base
	has_many :system_open_types #Ετσι ειναι η συνταξη για να γραψω και το παρακάτω
	has_many :systems, :through => :system_open_types
end
