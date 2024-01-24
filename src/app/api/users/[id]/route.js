import { connectionStr } from "@/db/connect"
import { User } from "@/model/User";
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export async function DELETE(req, content) {
    try {
        await mongoose.connect(connectionStr);
        const result = await User.findByIdAndDelete(content.params.id);
        if (!result) {
            return NextResponse.json({ message: 'User not found', status: 'fail' });
        }
        return NextResponse.json({ result, status: 'success' });
    } catch (error) {
        return NextResponse.json({ message: 'Error deleting user', status: 'error' });
    } finally {
        await mongoose.disconnect();
    }

}