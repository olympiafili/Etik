class System < ActiveRecord::Base
	has_many :system_lines #Εχει πολλες εγγραφες τετοιες
	has_many :system_open_types
end
