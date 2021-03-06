<?php

namespace App\Mail;

use App\PasswordReset;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ResetPassword extends Mailable
{
    use Queueable, SerializesModels;

    public $user;
    public $reset;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(PasswordReset $reset)
    {
        $this->reset = $reset;
        $this->user = $reset->user()->first();
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.auth.reset_password');
    }
}
