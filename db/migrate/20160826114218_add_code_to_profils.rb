class AddCodeToProfils < ActiveRecord::Migration
  def change
    add_column :profils, :code, :string
  end
end
