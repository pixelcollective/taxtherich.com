<?php

namespace Lantern\Repositories;

interface PostRepositoryInterface
{
    public function getAll();
    public function getAllPublished();
}
