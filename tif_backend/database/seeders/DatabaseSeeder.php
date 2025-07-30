<?php

namespace Database\Seeders;

use App\Models\Mensaje;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        $frases = [
            "frases galletitas de la fortuna",
            "El cielo sera tu limite, pues grandes acontecimientos te sucederán.",
            "Te sentirás feliz como un niño y veras al mundo con sus ojos.",
            "Confía en tu suerte, que es mucha y te rodeara de prosperidad.",
            "No todo el mundo puede recibir las mismas cosas. Se practico.",
            "Te aguarda una larga y feliz vida.",
            "Hoy es el momento de explorar: no temas.",
            "Muy pronto seras incluido en muchas reuniones, fiestas y tertulias.",
            "Cuando busques lo que mas deseas, recuerda hacer tu mejor esfuerzo.",
            "Tienes por delante un maravilloso día para triunfar; disfrútalo y compártelo.",
            "Hoy seras reconocido por tus dones especiales y lograras ser feliz por muchas horas.",
            "Tu corazón estallara de alegría con la llegada de buenas noticias.",
            "Mañana puede ser muy tarde para disfrutar lo que tienes hoy.",
            "Seras promovido en tu trabajo debido a tus logros y capacidades.",
            "Alégrate, un camino de hermosas pasiones te espera y debes transitarlo",
            "Nunca tendrás que preocuparte por un ingreso estable.",
            "Hoy tendrás un día de increíble alegría y brillara tu sentido del humor.",
            "Hoy compartirás las horas mas tiernas de tu vida con alguien muy amado.",
            "La rueda de la fortuna te favorecerá y estarás rodeado de prosperidad.",
            "Tendrás entera satisfacción al final de esta temporada. Prepárate.",
            "Muchos se alegraran por tus logros y a ti te mejorara la vida.",
            "Eres una persona a la que le gusta triunfar en la vida.",
            "Confía en tu buen juicio y veras que este te lleva al triunfo.",
            "Se te cumplirá un hermoso sueño y veras como otros sueños se hacen realidad.",
            "No olvides que un amigo es un regalo que te das a ti mismo.",
            "Sabes que es exactamente lo que quieres. Trabaja en ello y hazlo materializarse.",
            "Siente la felicidad que espera por ti y no olvides atraparla para mantenerla contigo."
        ];

        foreach ($frases as $frase) {
            $msj = new Mensaje();
            $msj->mensaje = $frase;
            $msj->save();
        }
    }
}
