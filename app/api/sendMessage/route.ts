import { NextRequest, NextResponse } from 'next/server';
import { supabase } from 'lib/supabaseClient';

export async function POST(request: NextRequest) {
  if (request.method !== 'POST')
    return NextResponse.json({ message: 'Method not allowed' });
  try {
    const { name, email, message } = await request.json();
    await supabase.from('messages').insert({ name, email, message });
    return NextResponse.json({
      message: `You correctly insert new message: ${name} is writing to you from ${email} email addres and say: ${message}`,
    });
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}
