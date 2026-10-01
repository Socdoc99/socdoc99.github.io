export const SERVICES_ENABLED = false;

export const CONTACT = {
  email: 'santiago9902@gmail.com',
  linkedin: 'https://www.linkedin.com/in/santiago-ospina-calle-37b059210',
  github: 'https://github.com/Socdoc99',
} as const;

// Flip these on once the asset/link actually exists. While false, the
// corresponding block is not rendered at all (no "TODO" ships in the build).
export const PROFILE = {
  hasPhoto: false,
  hasCv: false,
  cvUrl: '',
} as const;
