export const handleIdSelection = (slug: string, id?: string): string =>
  id ? slug.replace(':id', id) : '';

// Get All the Schools
export const SCHOOL_ENDPOINT_SLUG = '/School';
// Get the classrooms associated to that school
export const SCHOOL_ID_ENDPOINT_SLUG = '/School/:id';
// Get the classroom's information
export const CLASSROOM_ID_ENDPOINT_SLUG = '/ClassoRoom/:id';

export const GET_ALL_SCHOOLS = SCHOOL_ENDPOINT_SLUG;
export const GET_SCHOOL_CLASSROOMS = SCHOOL_ID_ENDPOINT_SLUG;
export const GET_CLASSROOM_DETAILS = CLASSROOM_ID_ENDPOINT_SLUG;
