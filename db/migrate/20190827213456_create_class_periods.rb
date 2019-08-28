class CreateClassPeriods < ActiveRecord::Migration[6.0]
  def change
    create_table :class_periods do |t|
      t.date :date, default: { expr: "('now'::text)::date" }
      t.string :attendance_list, array: true, default: []
      t.integer :attendance_count, :default => 0
      t.string :recorded_by, :default => "annonymous"
      t.integer :staff_ids, array: true, default: []

      t.timestamps
    end
  end
end
