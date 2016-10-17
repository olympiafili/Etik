class CreateEpikathimenos < ActiveRecord::Migration
  def change
    create_table :epikathimenos do |t|
      t.string :name

      t.timestamps
    end
  end
end
