import { cookies } from 'next/headers';

export async function POST(req) {
  try {
    // Clear the 'token' cookie by setting it with an expired date (Max-Age=0)
    const cookieStore = cookies();
    cookieStore.delete('token');  // This will delete the 'token' cookie

    // Send a success response using Response object
    return new Response(
      JSON.stringify({ message: 'Logged out successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('Error during logout:', err);

    // Send an error response using Response object
    return new Response(
      JSON.stringify({ message: 'An error occurred during logout' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
