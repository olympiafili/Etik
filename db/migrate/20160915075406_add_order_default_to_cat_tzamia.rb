class AddOrderDefaultToCatTzamia < ActiveRecord::Migration
  def change
    add_column :cat_tzamia, :order, :integer
    add_column :cat_tzamia, :default, :integer
  end
end
