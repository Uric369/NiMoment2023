export async function getCurrentUser() {
  const res = await fetch("/kaleid/api/curuser");
  return await res.json();
}
