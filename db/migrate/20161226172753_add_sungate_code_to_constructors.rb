class AddSungateCodeToConstructors < ActiveRecord::Migration
  def change
    add_column :constructors, :sungate_code, :string
  end
end
