const z = require("zod");

const movieCreateSchema = z.object({
  title: z.string(),
  imdbRatings: z.number(),
  authorId: z.number(),
  genreIds: z.array(z.number()),
  tagIds: z.array(z.number()),
});

const movieUpdateSchema = z.object({
  id: z.number(),
  title: z.string(),
  imdbRatings: z.number(),
  authorId: z.number(),
  genreIds: z.array(z.number()),
  tagIds: z.array(z.number()),
});

module.exports = {
  movieCreateSchema,
  movieUpdateSchema,
};
