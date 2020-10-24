<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;



class ApplicationType extends AbstractType{

/**
     * @param string $label
     * @param string $placeholder
     * @param array $options
     * @return array 
     */
    protected function getConfiguration($label, $placeholder, $required = TRUE){
 
        return [
            'label' => $label,
            'attr' => [
                'placeholder' => $placeholder
            ],
            'required' => $required
        ];
    }
}