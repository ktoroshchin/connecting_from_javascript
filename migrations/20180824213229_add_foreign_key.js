exports.up = function(knex, Promise) {
  return knex.schema.table("milestones", table => {
    table.integer("famous_people_id");

    table
      .foreign("famous_people_id");
      // .reference("id");
      // .on("famous_people");
      // .onDelete("cascade");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("milestones");
};
