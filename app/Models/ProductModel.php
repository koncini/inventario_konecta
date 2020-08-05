<?php namespace App\Models;

use CodeIgniter\Model;

class ProductModel extends Model
{
    protected $table      = 'product';
    protected $primaryKey = 'id';
 
    protected $returnType = 'array';
    protected $useSoftDeletes = false;
 
    protected $allowedFields = [
      'nombre',
      'referencia',
      'precio',
      'peso',
      'categoria',
      'stock'
    ];
 
    protected $useTimestamps = true;
    protected $createdField  = 'fecha_creacion';
    protected $updatedField  = 'fecha_actualizacion';
}