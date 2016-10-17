class CreateTermsops < ActiveRecord::Migration
  def change
    create_table :termsops do |t|
      t.text :num
      t.text :text

      t.timestamps
    end
  end
end
