<?php namespace App\Controllers;

use CodeIgniter\Controller;
use App\Models\ProductModel;
use Config\Services;
use Exception;

class ProductController extends Controller {

	protected $product;
	protected $request;

	function __construct()
	{
		$this->product = new ProductModel();
		$this->request = Services::request();
	}

	public function index()
	{
		return view('product');
	}

	public function delete($id)
	{
		try
		{
			$res = $this->product->delete($id);
			$response['res'] = $res;
			$response['success'] = TRUE;
			$response['message'] = "Successful delete";
			return json_encode($response);
		} catch (Exception $e)
		{
			$response['success'] = FALSE;
			$response['message'] = $e->getMessage();
			return json_encode($response);
		}
	}

	public function update($id)
	{
		try
		{
			$json = $this->request->getJSON();
			$update['nombre'] = $json->nombre;
			$update['referencia'] = $json->referencia;
			$update['precio'] = $json->precio;
			$update['peso'] = $json->peso;
			$update['categoria'] = $json->categoria;
			$update['stock'] = $json->stock;
			$res = $this->product->update($id, $update);
			$response['success'] = TRUE;
			$response['message'] = "Successful update";
			return json_encode($response);
		} catch (Exception $e)
		{
			$response['success'] = FALSE;
			$response['message'] = $e->getMessage();
			return json_encode($response);
		}
	}

	public function get($id)
	{
		try
		{
			$data = $this->product->find($id);
			if ($data)
			{
				$response['data'] = $data;
				$response['success'] = TRUE;
				$response['message'] = "Successful load";
			} else
			{
				$response['success'] = FALSE;
				$response['message'] = "Not found data";
			}
			return json_encode($response);
		} catch (Exception $e)
		{
			$response['success'] = FALSE;
			$response['message'] = $e->getMessage();
			return json_encode($response);
		}
	}

	public function list()
	{
		try
		{
			$data = $this->product->findAll();
			$response['data'] = $data;
			$response['success'] = TRUE;
			$response['message'] = "Successful load";
			return json_encode($response);
		} catch (Exception $e)
		{
			$response['success'] = FALSE;
			$response['message'] = $e->getMessage();
			return json_encode($response);
		}
	}

	public function create()
	{
		try
		{
			$json = $this->request->getJSON();
			// create data
			$insert['nombre'] = $json->nombre;
			$insert['referencia'] = $json->referencia;
			$insert['precio'] = $json->precio;
			$insert['peso'] = $json->peso;
			$insert['categoria'] = $json->categoria;
			$insert['stock'] = $json->stock;
			$res = $this->product->insert($insert);
			$response['success'] = TRUE;
			$response['message'] = "Successful save";
			return json_encode($response);
		} catch (Exception $e)
		{
			$response['success'] = FALSE;
			$response['message'] = $e->getMessage();
			return json_encode($response);
		}
	}

	public function test()
	{
		$data = $this->product->findAll();
		return json_encode($data);
	}

}